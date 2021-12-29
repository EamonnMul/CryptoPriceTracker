import './coin.css';
const Coin = (props) => {
  //{name,image,price,symbol,volume}
  const key = props.key;
  const name = props.name;
  const image = props.image;
  const price = props.price;
  const symbol = props.symbol;
  const volume = props.volume;
  const priceChange = props.priceChange;

  return (
    <div className='coin-cointainer'>
      <div className='coin-row'>
         <div className='coin'>
       <img src={image} alt='crypto'/>
       <h1>{name}</h1>
       <p className='coin-symbol'>{symbol}</p>
      </div>
       <div className='coin-data'>
        <p className='coin-price'>${price}</p>
        <p className='coin-volume'>Volume: ${volume}</p>
        {priceChange < 0 ?
          (<p className='coin-percentage red'>{priceChange.toFixed(2)}% </p>)
          : (  <p className='coin-percentage green'>{priceChange.toFixed(2)}% </p>)}
          <p className='coin-marketcap'>Mkt cap {volume} </p>
       </div>
      </div>
    </div>

  );
}

export default Coin;
