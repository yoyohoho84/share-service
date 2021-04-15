import {createGlobalStyle} from "styled-components";

import GilroyRegularEot from "./Gilroy-Regular/gilroy-regular.eot";
import GilroyRegularTtf from "./Gilroy-Regular/gilroy-regular.ttf";
import GilroyRegularWoff from "./Gilroy-Regular/gilroy-regular.woff";
import GilroyRegularWoff2 from "./Gilroy-Regular/gilroy-regular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy'), local('Gilroy'),
        url(${GilroyRegularEot}) format('eot'),
        url(${GilroyRegularTtf}) format('ttf'),
        url(${GilroyRegularWoff}) format('woff'),
        url(${GilroyRegularWoff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
`;

// export default GlobalFonts = createGlobalStyle`
//  @font-face {
//         font-family: 'Gilroy';
//         src: local('Gilroy'), local('Gilroy'),
//         url(${GilroyRegularEot}) format('eot'),
//         url(${GilroyRegularTtf}) format('ttf'),
//         url(${GilroyRegularWoff}) format('woff'),
//         url(${GilroyRegularWoff2}) format('woff2');
//         font-weight: 400;
//         font-style: normal;
//     }
// `;
