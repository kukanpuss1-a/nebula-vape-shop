const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

const app = express();

// Ваш токен бота
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Запускаем Express сервер для обслуживания веб-приложения
app.use(express.static('public'));
app.listen(3001, () => {
    console.log('Web app is running on http://localhost:3001');
});

// Обработка команды /start и создание кнопки для открытия веб-приложения
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Welcome to Nebula Vape!", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "VAPE SHOP",
                        web_app: { url: 'https://kukanpuss1-a.github.io/nebula-vape-shop/shop.html' }
                    }
                ]
            ]
        }
    });
});

