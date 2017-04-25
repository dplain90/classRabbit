export const initAutocomplete = () => {
  this.autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {types: ['geocode']});
  this.autocomplete.addListener('place_changed', this.fillInAddress);
};

export const geolocate = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      this.autocomplete.setBounds(circle.getBounds());
    });
  }
};

export const addAptNumToAddress = (address, apt_num, getAddressFromGoogle) => {
  address_components = address.split(",");

  if(apt_num !== "") {
   address_components = address_components
    .slice(0, 1)
    .concat(apt_num, address_components.slice(-3));
  } else {
    return getAddressFromGoogle.formatted_address
  }

  return address_components.join(",");
};

export const getLocalityAndAddress = (autocomplete) => {
   let place = autocomplete.getPlace();
   let locality = "";
   let componentForm = { locality: 'long_name' };

  for (var i = 0; i < place.address_components.length; i++) {
    let addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      locality = place.address_components[i][componentForm[addressType]];
    }
  }

  return { locality: locality, address: place.formatted_address }
}



// this.props.getTaskers(this.props.task.category_id, locality);
