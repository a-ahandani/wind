import { TWStyles } from "../tailwind";

export const withTailwindStyles = (styles: Array<unknown> = []) => {
    return function <T extends CustomElementConstructor>(constructor: T) {
        return class extends constructor {
            static styles = [...styles, TWStyles];
        };
    }
}