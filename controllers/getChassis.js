
const axios =  require('axios');
const getChassis = async (req,res,next) => {
const tipo = req.query.tipo;
const documento = req.query.documento;

console.log(tipo,documento);
  try {
    let response = await axios.get(
        `https://sdmapisprod.azure-api.net/api/unidad/getUnidadesClient?tipo=${tipo}&documento=${documento}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '67e96fe2787a480e82a91dd14afb0695',
          },
        }
      );

  let data = response.data;

  console.log(data);
 res.send('Saludos desde express');
 res.json(data);
  return data;
  } catch (error) {

  }


}

module.exports = {getChassis}