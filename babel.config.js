const path = require('path');

module.exports = (api) => {
    api.cache(true);

    return {
        plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
            'babel-plugin-styled-components',
            [
                'module-resolver',
                {
                    root: ['./src'],
                    extensions: ['.js', '.ts', '.tsx', '.json'],
                    alias: {
                        '@app': path.resolve(__dirname, 'src'),
                    },
                },
            ],
        ],
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
        ],
    };
};