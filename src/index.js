module.exports = function check(str, bracketsConfig) {
    let config = {};
    if (str.length % 2 != 0)
        return false;
    if (str == '')
        return true;
    for (let i = 0; i < bracketsConfig.length; i++)
        config[bracketsConfig[i][1]] = bracketsConfig[i][0];
    k = str.length;
    while (k > 0) {
        for (let i = 0; i < str.length - 1; i++) {
            for (let key in config) {
                if ((str[i] == config[key]) && (str[i + 1] == key)) {
                    str = str.replace(str[i] + str[i + 1], '');
                    break;
                }
            }
        }
        k--;
    }
    if (str.length > 0)
        return false;
    else
        return true;
}
