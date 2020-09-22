// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'GET') {
    const data = [{
      name: "prod1",
      price: 100,
      image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
      name: "prod2",
      price: 100,
      image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
      name: "prod3",
      price: 100,
      image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }, {
      name: "prod4",
      price: 100,
      image: 'https://s1.eestatic.com/2020/01/22/cocinillas/recetas/pasta-y-arroz/Espaguetis-Salmon-Queso_Philadelphia-Pasta_y_arroz_461715202_143042655_1706x960.jpg'
    }]

    res.end(JSON.stringify(data))
  }
}
