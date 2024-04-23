declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.lottie";
declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }