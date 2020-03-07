import {DynamicRoutes} from "../shared/helpers/dynamicRoutes";

export const configCommonSwagger = (app: any, dirname: string, files: string[]) => {
    const expressSwaggerSubscriber = require('express-swagger-generator')(app);
    let options = {
        route: {
            url: '/general-system/api-docs',
            docs: '/general-system/api-docs.json'
        },
        swaggerDefinition: {
            info: {
                description: 'This is a sample server',
                title: 'General System  API',
                version: '1.0.0',
            },
            host: `${process.env.BASE_URL || 'localhost:3000'}`,
            basePath: '/general-system',
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            }
        },
        basedir: dirname, //app absolute path
        files//Path to the API handle folder
    };
    const config = expressSwaggerSubscriber(options);
    DynamicRoutes.addConfig(config);
}
