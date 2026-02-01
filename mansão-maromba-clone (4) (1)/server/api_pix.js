
/**
 * BACKEND - NODE.JS (Express)
 * Este arquivo deve rodar no seu servidor.
 * Requer: npm install axios express
 */

const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Rota para gerar Pix via Vega Checkout
app.post('/api/pix', async (req, res) => {
  try {
    const { amount, items } = req.body;

    // A VEGA_API_KEY deve estar configurada no seu ambiente (.env)
    const VEGA_API_KEY = process.env.VEGA_API_KEY;

    if (!VEGA_API_KEY) {
      return res.status(500).json({ error: "Configuração do servidor ausente." });
    }

    // Chamada fictícia seguindo padrão de gateways brasileiros como Vega
    const response = await axios.post('https://api.vegacheckout.com.br/v1/payments', {
      payment_method: 'pix',
      amount: Math.round(amount * 100), // Valor em centavos
      items: items,
      // Você pode adicionar dados do cliente aqui vindo do front
      customer: {
         name: "Cliente Mansao Maromba",
         email: "cliente@exemplo.com",
         document: "00000000000"
      }
    }, {
      headers: {
        'Authorization': `Bearer ${VEGA_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // Retorna para o front o QR Code e o Copia e Cola
    // Os campos exatos dependem do retorno da documentação da Vega
    res.json({
      qr_code: response.data.pix.qr_code_url,
      copy_paste: response.data.pix.qr_code
    });

  } catch (error) {
    console.error("Erro na Vega API:", error.response?.data || error.message);
    res.status(400).json({ 
      error: "Falha ao gerar Pix", 
      details: error.response?.data 
    });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
