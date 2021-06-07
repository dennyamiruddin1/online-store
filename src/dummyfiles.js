export const products = [
  {
    id: "pid1",
    label: "Beras Putih",
    type: 1, // type 0: Organic, type 1: Other
    price: 50000,
    description: "Nasi putih organik 10kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "pid2",
    label: "Kretek Tembakau",
    type: 2,
    price: 10000,
    description: "Tembakau asli Yogyakarta",
    image: "https://images.unsplash.com/photo-1570111645189-666fb52ee39a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80"
  },
  {
    id: "pid3",
    label: "Beras Hitam",
    type: 1,
    price: 100000,
    description: "Beras hitam organik 10kg",
    image: "https://images.unsplash.com/photo-1502825868325-37569f642e95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
  },
]

export const cart = []

export const excel_products = [];

export const order = null

export const order_history = [
  {
    id: 'oid1',
    orderer: 'Denny Amiruddin',
    address: '17 Shearwater Way, Harkness, 3337, VIC',
    email: 'dennyamiruddin@outlook.com',
    phone: '0413841560',
    date: 'Fri Jun 04 2021 08:24:10 GMT+0700 (GMT+07:00)',
    orderCart: [
      {
        id: 'pid1',
        label: 'Beras Putih',
        price: 50000,
        description: "Nasi putih organik 10kg",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        quantity: 1,
        totalprice: 50000
      }
    ]
  }
]