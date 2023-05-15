export const Invite = (props) => {
  return (
    <section className='invite'>
      <div className='invite__container'>
        <h2 className='invite__title'>
          {props.adjective}
          <br />
          {props.name}!
        </h2>
        <p className='invite__text'>
          Вот и&nbsp;наступил самый долгожданный день в&nbsp;нашей жизни,
          который мы&nbsp;хотим провести в&nbsp;кругу близких и&nbsp;друзей.
        </p>
        <p className='invite__text'>
          С&nbsp;большим удовольствием приглашаем {props.pronoun1}{' '}
          на&nbsp;знаменательный праздник&nbsp;- нашу свадьбу!
        </p>
        <p className='invite__datetime'>Суббота | 8 июля 2023 | 15:30</p>
        <p className='invite__text'>
          Ярославский р-н, Карабихское с.п., п. Дубки, Глэмпинг «Клевер»
        </p>
        <p className='invite__signature'>Глеб и&nbsp;Александра</p>
      </div>
    </section>
  );
};
