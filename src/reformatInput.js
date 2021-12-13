function FormatCar(car) {
  switch (car) {
    case 'gt4_toyota_supra':
      return 'Toyota Supra';
    case 'gt4_aston_martin_vantage':
      return 'Aston Martin Vintage';
    case 'gt4_camaro':
      return 'Chevrolet Camaro';
    case 'gt4_mclaren_570s':
      return 'McLarn 570s';
    case 'gt4_mercedes_amg':
      return 'Mercedes AMG';
    case 'gt4_ginetta_g55':
      return 'Ginetta G55';
    case 'gt4_saleen_s1':
      return 'Saleen S1';
    case 'gt4_alpine_a110':
      return 'Alpine A110';
    case 'gt4_bmw_m4':
      return 'BMW M4';
    case 'gt4_porsche_cayman_718':
      return 'Porsche Cayman 718';
    default:
      return '';
  }
}

function FormatTrack(track) {
  switch (track) {
    case 'rt_fuji_speedway-layout_gp':
      return 'Fuji Speedway'
    default:
      return 'Track';
  }
}

export { FormatCar, FormatTrack }