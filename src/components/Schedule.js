export const Schedule = () => {
  return (
    <section className='schedule'>
      <div className='schedule__container'>
        <h2 className='schedule__title'>Программа мероприятия</h2>
        <ul className='schedule__list'>
          <li className='schedule__item'>
            <p className='schedule__time'>15:30-16:00</p>
            <div className='schedule__wrapper'>
              <h3 className='schedule__subtitle'>🥂 Встреча гостей / Фуршет</h3>
              <p className='schedule__text'>
                Собираясь на&nbsp;мероприятие, просим взять с&nbsp;собой ваши
                прекрасные улыбки и&nbsp;хорошее настроение
              </p>
            </div>
          </li>
          <li className='schedule__item'>
            <p className='schedule__time'>16:00-16:30</p>
            <div className='schedule__wrapper'>
              <h3 className='schedule__subtitle'>
                💍 Церемония бракосочетания
              </h3>
              <p className='schedule__text'>
                На&nbsp;всякий случай приготовьте носовые платочки для
                трогательного момента
              </p>
            </div>
          </li>
          <li className='schedule__item'>
            <p className='schedule__time'>17:00-23:00</p>
            <div className='schedule__wrapper'>
              <h3 className='schedule__subtitle'>🍰 Свадебный ужин</h3>
              <p className='schedule__text'>
                Время вкусной еды, веселья и&nbsp;развлечений
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
