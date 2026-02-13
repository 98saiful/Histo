import { createMMKV } from "react-native-mmkv";
import { Storage } from "redux-persist";

const storage = createMMKV()

/**
 * MMKV storage wrapper for Redux Persist
 */
export const mmkvStorage: Storage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: (key) => {
        const value = storage.getString(key);
        return Promise.resolve(value || null);
    },
    removeItem: (key) => {
        storage.remove(key);
        return Promise.resolve();
    },
};
