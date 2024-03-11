export const entry = "./src/index.js";
export const module = {
    rules: [
        //...
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            type: "asset/resource",
        },
    ],
};