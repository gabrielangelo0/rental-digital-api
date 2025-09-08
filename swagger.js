const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "Rental Digital - API",
        description: "Essa api foi desenvolvida para gerenciar o aluguel de carros."
    },
    servers: [
        {
            url: 'http://localhost:3001'
        }
    ],
    components: {
        schemas: {
            someBody: {
                $name: "Jhon Doe",
                $age: 29,
                about: ""
            },
            someResponse: {
                name: "Jhon Doe",
                age: 29,
                diplomas: [
                    {
                        school: "XYZ University",
                        year: 2020,
                        completed: true,
                        internship: {
                            hours: 290,
                            location: "XYZ Company"
                        }
                    }
                ]
            },
            someEnum: {
                '@enum': [
                    "red",
                    "yellow",
                    "green"
                ]
            }
        },
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./endpoints.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');           // Your project's root file
});