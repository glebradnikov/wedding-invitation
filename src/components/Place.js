import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const Place = () => {
  return (
    <section className='palce'>
      <div className='place__container'>
        <h2 className='place__title'>Место проведения</h2>
        <p className='place__subtitle'>Глэмпинг «Клевер»</p>
        <p className='place__text'>
          Адрес: Ярославский р-н, Карабихское с.п., п. Дубки, Глэмпинг «Клевер»
        </p>
      </div>
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
        }}>
        <Map
          className='place__map'
          defaultState={{
            center: [57.515194, 39.746668],
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl'],
          }}>
          <Placemark defaultGeometry={[57.515194, 39.746668]} />
        </Map>
      </YMaps>
    </section>
  );
};
