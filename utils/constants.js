const RENT_CONFIRMATION_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Aluguel</title>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #2ecc71;
            color: #ffffff;
            padding: 25px;
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            padding: 30px;
        }
        .footer {
            background-color: #f1f9f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666666;
        }
        .confirmation-badge {
            background-color: #f1f9f5;
            border: 2px dashed #2ecc71;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
            text-align: center;
        }
        .divider {
            border-top: 1px solid #eeeeee;
            margin: 25px 0;
        }
        .info-item {
            margin-bottom: 12px;
        }
        .info-label {
            font-weight: bold;
            color: #27ae60;
        }
        .contact-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 95%;
                margin: 10px auto;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <center>
        <div class="container">
            <!-- Cabeçalho -->
            <div class="header">
                <div class="logo">RentalCar Aluguel</div>
                <h1>Reserva Confirmada!</h1>
            </div>
            
            <!-- Conteúdo -->
            <div class="content">
                <p>Olá <strong>Carlos Silva</strong>,</p>
                
                <p>Sua reserva foi confirmada com sucesso. Agradecemos por escolher nossos serviços!</p>
                
                <div class="confirmation-badge">
                    <h2 style="margin-top: 0; color: #27ae60;">✅ Reserva Confirmada</h2>
                    <p>Nº da reserva: <strong>MC-4892-65</strong></p>
                </div>
                
                <h3 style="color: #27ae60;">Resumo da Reserva</h3>
                
                <div class="info-item">
                    <span class="info-label">Veículo:</span> Volkswagen Polo Comfortline
                </div>
                
                <div class="info-item">
                    <span class="info-label">Período:</span> 15/08/2023 às 14:00 até 18/08/2023 às 14:00
                </div>
                
                <div class="info-item">
                    <span class="info-label">Local de Retirada:</span> Aeroporto de Congonhas - São Paulo, SP
                </div>
                
                <div class="divider"></div>
                
                <div class="contact-info">
                    <h3 style="color: #27ae60; margin-top: 0;">Precisa de ajuda?</h3>
                    <p>Estamos à disposição pelo WhatsApp: <strong>(11) 98765-4321</strong></p>
                    <p>Ou pelo e-mail: <strong>contato@mobicar.com.br</strong></p>
                </div>
                
                <p>Atenciosamente,<br>
                <strong>Equipe MobiCar</strong></p>
            </div>
            
            <!-- Rodapé -->
            <div class="footer">
                <p>© 2023 MobiCar Aluguel de Veículos. Todos os direitos reservados.</p>
                <p>Você está recebendo este e-mail porque realizou uma reserva em nossa plataforma.</p>
            </div>
        </div>
    </center>
</body>
</html>`

module.exports = {
    RENT_CONFIRMATION_TEMPLATE
};