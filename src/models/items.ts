export const items = [
    "MB Qt Ctn",
    "MB Qt Crt",
    "MB Pint Ctn 330ml",
    "MB Pint Crt 330ml",
    "MB Can 330ml",
    "MB Can 500ml",
    "MPre Pint Ctn 330ml",
    "MPre Pint Crt 330ml",
    "Keen Qt Ctn",
    "Keen Qt Crt",
    "Keen Can 330ml",
    "Keen Can 500ml",
    "Keen Pint Ctn 330ml",
    "Keen Pint Crt 330ml",
    "BS Qt Ctn",
    "BS Qt Crt",
    "BS Can 330ml",
    "AG 6.5% Qt Ctn",
    "AG 6.5% Qt Crt",
    "AG 6.5% Can 330ml",
    "AG 6.5% Can 500ml",
    "AG 5% Can 330ml",
    "AG 5% Can 500ml",
    "AG 8.1% Can 500ml",
    "MS Can 330ml",
    "MS Can 500ml"
];

export const kegs = [
    "MB 30L",
    "MPre 10L",
    "MPre 30L",
    "BS 10L",
    "BS 30L",
    "Keen 10L",
    "Keen 30L",
    "AG 6.5% 20L",
    "AG 6.5% 30L",
    "AG 5% 30L"
];

export const proAddedItems = items.map((item) => `Pro ${item}`);

export const allItems = [...items, ...proAddedItems, ...kegs];
