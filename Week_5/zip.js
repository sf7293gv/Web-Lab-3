function isMinnesotaZip(code) {
    // 55001 - 56763
    if (code >= 55001 && code <= 56763) {
        return true;
    } else {
        return false;
    }
}

console.log(isMinnesotaZip(55403));
console.log(isMinnesotaZip(55000));