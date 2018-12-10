$(document).ready(function() {
  $('#search-bar').hideseek({
    hidden_mode: true
  });

  lightbox.option({
    maxWidth: 800,
    positionFromTop: 120
  })
});

var description = [
  {
  id: 1,
  name: 'Hay Bales',
  desc: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
  },

  {
  id: 2,
  name: 'Lake',
  desc: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
  },

  {
  id: 3,
  name: 'Canyon',
  desc: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
  },

  {
  id: 4,
  name: 'Iceberg',
  desc: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
  },

  {
  id: 5,
  name: 'Desert',
  desc: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
  },

  {
  id: 6,
  name: 'Fall',
  desc: 'Fall is coming, I love when the leaves on the trees start to change color.'
  },

  {
  id: 7,
  name: 'Plantation',
  desc: 'I drove past this plantation yesterday, everything is so green!'
  },

  {
  id: 8,
  name: 'Dunes',
  desc: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
  },

  {
  id: 9,
  name: 'Countryside Lane',
  desc: 'We enjoyed a quiet stroll down this countryside lane.'
  },

  {
  id: 10,
  name: 'Sunset',
  desc: 'Sunset at the coast! The sky turned a lovely shade of orange.'
  },

  {
  id: 11,
  name: 'Cave',
  desc: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
  },

  {
  id: 12,
  name: 'Bluebells',
  desc: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
  }
]

  $("input").keyup(function() {
    // Value of input (lake)
    var value = $(this).val().toLowerCase();
    // Looping thru Description array to find match
    for(let i = 0; i < description.length; i++)
    // if matched show el
    if(description[i].name.toLowerCase().indexOf(value) > -1) {
    // show el
      $('.photo-' + (i + 1)).css('display', '');
    // hide el
    } else {
      $('.photo-' + (i + 1)).css('display', 'none')
    }
  });









  
















// const captions = {
//   photos1: "blakc on black",
//   photos2: "test 2"
// };

// let attribute = $('a[data-title]');





// for(i = 1; i <= 12; i++) {
//   attribute.attr('data-title', 'captions.photos' + i);
// }







