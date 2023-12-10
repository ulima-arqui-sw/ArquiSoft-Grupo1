const { Publicacion } = require('../models');

module.exports = async () => {
  const publicacionesAprendices =
    [
      {
        titulo: 'Ayuda con proyecto de tesis',
        tipo: 'publicacionAprendiz',
        contenido: 'Necesito ayuda con mi proyecto de tesis sobre Vision Computacional!',
        idUsuario: 3
      },
      {
        titulo: 'Busco profesor de Francés',
        tipo: 'publicacionAprendiz',
        contenido: 'Se busca profesor de Francés desde cero para adolescente de 15 años. Idiomas.',
        idUsuario: 4
      },
      {
        titulo: 'Busco asesor para comenzar un emprendimiento',
        tipo: 'publicacionAprendiz',
        contenido: 'Necesito ayuda para comenzar un emprendimiento sobre helados artesanales',
        idUsuario: 2
      },
      {
        titulo: 'Ayuda con proyecto de tesis de derecho',
        tipo: 'publicacionAprendiz',
        contenido: 'Necesito ayuda con mi proyecto de tesis sobre Derecho Penal!',
        idUsuario: 5
      }
    ]
  
  const publicacionesMentores = [
    {
      titulo: 'Ofrezco asesoría sobre temas de Machine Learning',
      tipo: 'publicacionMentor',
      contenido: 'Tengo una maestría de la UNI y te puedo ayudar en cualquier tema (vision computacional, inteligencia artificial, etc)',
      idUsuario: 6
    },
    {
      titulo: 'Doy clases de inglés y francés',
      tipo: 'publicacionMentor',
      contenido: 'Doy clases para todas las edades y niveles de inglés y francés. Idiomas.',
      idUsuario: 7
    },
    {
      titulo: 'Doy clases de alemán',
      tipo: 'publicacionMentor',
      contenido: 'Doy clases de alemán para todas las edades y niveles. Idiomas.',
      idUsuario: 1
    }
  ]

  await Publicacion.bulkCreate(publicacionesAprendices);
  await Publicacion.bulkCreate(publicacionesMentores);


};
