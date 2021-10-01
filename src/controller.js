const { default: axios } = require('axios');
const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  console.log("ENTRA")
  const {input} = req.query
  console.log("input", input);
  const {data} = await axios(`https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`);
  const valores = data.values
  data["parejas"] = []
  let id = 1
  for (let index = 0; index<valores.length;index++){
    for (let index2 = index; index2<valores.length;index2++){
      let h1 = parseInt(valores[index].h_in)
      let h2 = parseInt(valores[index2].h_in)
      let suma = h1+h2
      if ((h1+h2)==parseInt(input)){
        data.parejas.push({
          "index":id,
          "first_player":valores[index].first_name +" "+ valores[index].last_name ,
          "second_player":valores[index2].first_name +" "+ valores[index2].last_name 
        })
        id = id+1
      }
    }
  }
  //const results = data.data.map((elem)=>({
  //  id:elem.id,
  //  first_player: elem.first_player,
  //  second_player: elem.second_player,
  //}));
  //resp.json(results);
  resp.json({"parejas":data.parejas})
};

module.exports = { getPairsOfPlayers };
