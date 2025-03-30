# trading_system
# Algorithmic Trading Dashboard

This project is a simple algorithmic trading system prototype that fetches market data, applies a basic trading strategy, and displays results in a user-friendly dashboard. The application uses the Binance API to fetch real-time price data for the BTC/USDT trading pair.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Trading Strategy](#trading-strategy)
- [UI/UX Considerations](#uiux-considerations)
- [License](#license)

## Features

- Fetches real-time market data from the Binance API.
- Implements a simple moving average crossover trading strategy.
- Displays current price, moving averages, and trading signals (Buy/Sell/Hold).
- Responsive and user-friendly dashboard.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **API**: Binance API for market data
- **Charting**: Recharts for data visualization

## Installation

1. **Clone the repository**:
   ```bash
   git clone 
   cd trading-dashboard
   
Install dependencies for the backend: Navigate to the backend directory (if you have separated it) and run:

npm install
Install dependencies for the frontend: Navigate to the frontend directory (if you have separated it) 


npm install
Create a .env file in the root of the backend directory with the following content:


FRONTEND_URL=http://localhost:3000
Create a .env file in the root of the frontend directory with the following content:


REACT_APP_API_URL=http://localhost:5001

Start the backend server: Navigate to the backend directory and run:

node server.js
Start the frontend application: Navigate to the frontend directory npm start
Open your browser and go to http://localhost:3000 to view the trading dashboard.

