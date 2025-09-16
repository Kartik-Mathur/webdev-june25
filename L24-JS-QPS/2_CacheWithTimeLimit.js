var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    let isBombActive = this.cache.has(key);
    if (isBombActive) {
        // Agar bomb active hai toh pehle wale bomb ko defuse kardo usse key nhi delete
        // karni
        let currentBombNumber = this.cache.get(key).bombNumber;
        clearTimeout(currentBombNumber); // diffuse kar diya
    }

    // Initially aap bomb set kardo, for the key
    this.cache.set(
        key,
        {
            value,
            // bomb daaldo jo current key ko udda de
            bombNumber: setTimeout(() => {
                this.cache.delete(key)
            }, duration)
        }
    )
};


TimeLimitedCache.prototype.get = function (key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function () {
    return this.cache.size
};
