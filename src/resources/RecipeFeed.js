import _map from 'lodash.map'

export default {
  feed() {
    return {
      path: '/object-type/recipes',
      resolve: (response, mappers) => {
        let _recipes = _map(response.objects, function(i) {
          let temp = {
            title: i.title,
            image: i.metadata.image.imgix_url,
            published: i.created_at,
            author: i.metadata.author.title,
            _id: i.slug
          };
          return temp;
        })
        return mappers.pipe(_recipes)
      }
    }
  }
}
