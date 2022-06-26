import { ungzip, gzip } from 'pako';

export type MelvorData = {
    v: number; // version, 17
    n: number[]; // numberVars
    b: number[]; // boolVars
    s: number[][]; // serializeVars
    ns: number[][][]; // serializeNestedVars
    o: string[]; // otherVars
    cd: number[]; // game?
};
  

export const decryptSave = (save: string): MelvorData => {
    const dsave: MelvorData = JSON.parse(ungzip(atob(save), { to: 'string' })) as MelvorData;
    console.log(dsave);
    return dsave;
}

export const encryptSave = (save: MelvorData) => {
    return btoa(gzip(JSON.stringify(save), { to: 'string' }));
}

