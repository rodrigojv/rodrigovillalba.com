import { existsSync } from "node:fs";

export const CV_PATH = "/cv/rodrigo-villalba.pdf";

// El PDF no vive en el repo hasta que Rodrigo lo suba; sin archivo no se enlaza.
export const cvAvailable = existsSync(`public${CV_PATH}`);
