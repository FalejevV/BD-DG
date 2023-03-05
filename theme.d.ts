import 'styled-components';

type ThemeMode = 'light' | 'dark';

declare module 'styled-components' {
    export interface DefaultTheme {
        frameColor:string,
        bgColor:string,
        accentColor:string,
    }
}