import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Product = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className=''>
      {/* Navbar */}
      <nav className="bg-gray-100 p-4 items-center justify-center flex">
        <div className=" flex">
          <img className='h-10' src='https://i.pinimg.com/564x/3d/9b/8d/3d9b8d9c98b1b94c1f6355c0cd428cbd.jpg' alt="logo" />
          <div className="text-2xl text-center font-thin font-serif">CORAL</div>
          <img className='h-10' src='https://i.pinimg.com/564x/3d/9b/8d/3d9b8d9c98b1b94c1f6355c0cd428cbd.jpg' alt="logo" />
        </div>
      </nav>

      <div className="p-4">
        <div className="text-4xl text-center font-bold font-serif">Our Products</div>
        <div className="container mt-10 mx-auto flex justify-center">
          <select
            className="p-2 bg-black text-white rounded focus:outline-none"
            value={categoryFilter}
            onChange={(e) => handleCategoryFilter(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-gray-100 flex flex-col justify-between"
              style={{ maxWidth: '300px' }} // Set max width for each product card
            >
              <div className="w-full h-64 mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-lg font-bold mb-2">{product.title}</div>
              <div className="flex justify-between">
                <div className="text-gray-700">${product.price}</div>
                <div className="text-gray-600">{product.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className='flex flex-wrap justify-center gap-8 p-5 mt-20  lg:gap-28 lg:flex-row md:flex-col md:items-center md:gap-16'>
  <section className="flex flex-col items-center"><div><div>
<img src="data:image/svg+xml,%3csvg%20width='180'%20height='34'%20viewBox='0%200%20180%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.05%2016.598C42.05%2013.462%2043.016%2010.8673%2044.948%208.814C46.88%206.75133%2049.344%205.72%2052.34%205.72C53.544%205.72%2054.706%205.88333%2055.826%206.21C56.9553%206.53667%2057.9213%206.994%2058.724%207.582L57.324%209.052C56.7547%208.464%2056.036%208.016%2055.168%207.708C54.3%207.39067%2053.376%207.232%2052.396%207.232C50.0253%207.232%2048.1493%207.98333%2046.768%209.486C45.3867%2010.9793%2044.7053%2013.2053%2044.724%2016.164C44.7427%2019.2627%2045.4847%2021.638%2046.95%2023.29C48.4153%2024.9327%2050.31%2025.754%2052.634%2025.754C54.1647%2025.754%2055.476%2025.46%2056.568%2024.872C57.66%2024.284%2058.5%2023.5467%2059.088%2022.66L60.194%2023.598C59.326%2024.8113%2058.206%2025.7493%2056.834%2026.412C55.4713%2027.0747%2053.964%2027.406%2052.312%2027.406C49.3907%2027.406%2046.95%2026.454%2044.99%2024.55C43.03%2022.6367%2042.05%2019.986%2042.05%2016.598ZM56.68%208.478L57.8%206.182H58.892V12.44H57.59L56.68%208.478ZM61.3273%2016.668C61.3273%2013.5133%2062.2467%2010.9%2064.0853%208.828C65.9333%206.756%2068.36%205.72%2071.3653%205.72C74.3707%205.72%2076.7927%206.69533%2078.6313%208.646C80.47%2010.5967%2081.3893%2013.2053%2081.3893%2016.472C81.3893%2019.58%2080.4793%2022.184%2078.6593%2024.284C76.8393%2026.3747%2074.422%2027.42%2071.4073%2027.42C68.4767%2027.42%2066.064%2026.4307%2064.1693%2024.452C62.2747%2022.4733%2061.3273%2019.8787%2061.3273%2016.668ZM64.0013%2016.178C64.0013%2019.1087%2064.6827%2021.4653%2066.0453%2023.248C67.408%2025.0213%2069.186%2025.908%2071.3793%2025.908C73.778%2025.908%2075.598%2025.1147%2076.8393%2023.528C78.09%2021.932%2078.7153%2019.6033%2078.7153%2016.542C78.7153%2013.7887%2078.048%2011.5627%2076.7133%209.864C75.388%208.16533%2073.61%207.316%2071.3793%207.316C68.99%207.316%2067.1607%208.086%2065.8913%209.626C64.6313%2011.1567%2064.0013%2013.3407%2064.0013%2016.178ZM83.5038%2027V25.852L86.2478%2025.348L86.2758%2016.444L86.2478%207.778L83.5038%207.302V6H92.1278C94.0504%206%2095.4691%206.42%2096.3838%207.26C97.3078%208.1%2097.7698%209.29%2097.7698%2010.83C97.7698%2012.5193%2097.2098%2013.8913%2096.0898%2014.946C94.9791%2015.9913%2093.6584%2016.514%2092.1278%2016.514C91.5118%2016.514%2090.7231%2016.4953%2089.7618%2016.458C88.8098%2016.4113%2088.0818%2016.3693%2087.5778%2016.332V15.24L89.1038%2015.254H91.0918C92.4731%2015.254%2093.4718%2014.8667%2094.0878%2014.092C94.7131%2013.3173%2095.0258%2012.272%2095.0258%2010.956C95.0258%209.78933%2094.7551%208.898%2094.2138%208.282C93.6724%207.666%2092.7998%207.358%2091.5958%207.358H89.1878L88.7958%207.624L88.7398%2016.458L88.7678%2025.348L91.6238%2025.852V27H83.5038ZM90.9378%2016.332L92.9678%2015.268L97.6298%2022.73C98.4604%2023.99%2099.1931%2024.8253%2099.8278%2025.236C100.472%2025.6373%20101.05%2025.8427%20101.564%2025.852V27H98.0358L97.1118%2026.104L90.9378%2016.332ZM100.791%2027V25.852L103.339%2025.362L105.593%2019.412L110.381%205.888H112.089L116.821%2018.74L119.341%2025.362L121.707%2025.852V27H114.231V25.852L116.611%2025.418L114.777%2019.86L110.731%209.192L106.895%2019.804L105.103%2025.432L107.721%2025.852V27H100.791ZM105.971%2020.448L106.461%2019.062L111.207%2019.202L115.757%2019.048L116.121%2020.448H105.971ZM122.387%2027V25.852L125.131%2025.404L125.159%2016.444L125.131%207.778L122.387%207.302V6H130.857V7.302L127.651%207.778L127.623%2016.444L127.651%2025.39L128.379%2025.754H135.365L136.863%2021.26H138.249L137.549%2027H122.387Z'%20fill='black'/%3e%3cpath%20d='M149.354%2017.5L156.5%2010.3536L163.646%2017.5L156.5%2024.6464L149.354%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3cpath%20d='M157.354%2017.5L164.5%2010.3536L171.646%2017.5L164.5%2024.6464L157.354%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3cpath%20d='M165.354%2017.5L172.5%2010.3536L179.646%2017.5L172.5%2024.6464L165.354%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3cpath%20d='M0.353554%2017.5L7.5%2010.3536L14.6464%2017.5L7.5%2024.6464L0.353554%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3cpath%20d='M8.35355%2017.5L15.5%2010.3536L22.6464%2017.5L15.5%2024.6464L8.35355%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3cpath%20d='M16.3536%2017.5L23.5%2010.3536L30.6464%2017.5L23.5%2024.6464L16.3536%2017.5Z'%20stroke='black'%20stroke-width='0.5'/%3e%3c/svg%3e" alt=""/></div>
<p className=" mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
<div className="flex mt-2  space-x-4 text-left">
  <FaFacebook className="text-black hover:text-blue-700" />
  <FaTwitter className="text-black hover:text-blue-700" />
  <FaLinkedin className="text-black hover:text-blue-700" />
  <FaInstagram className="text-black hover:text-blue-700" />
</div>

  </section>
  <div>
    <div>
      <p className=' font-bold'>ABOUT US</p>
      <p className=' mt-5'>Our Producers</p>
      <p className=' mt-5'>Sitemap</p>
      <p className=' mt-5'>FAQ</p>
      <p className=' mt-5'>About Us</p>
      <p className=' mt-5'>Terms &amp; Conditions</p>
    </div>
  </div>
  <div>
    <div>
      <p className=' font-bold'>CUSTOMER SERVICES</p>
      <p className=' mt-5'>Contact Us</p>
      <p className=' mt-5'>Track Your Order</p>
      <p className=' mt-5' >Product Care &amp; Repair</p>
      <p className=' mt-5'>Book An Appointment</p>
      <p className=' mt-5'>Shipping &amp; Returns</p>
    </div>
  </div>

</footer>
<section className='flex  items-center justify-center gap-8 bg-gray-900 text-white p-5'>
  <section className="">
    <div className="">
      <p>©2024 Coral, Inc.</p>
    </div>
  </section>
  <div></div>
<div><img width="220" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAAYCAYAAADKzlk7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6rSURBVHgB7Z0LUFTXGce/BdnlsTwlEXkIGmIi4kg0Qa0PYGLR2hmRTEH7BB9N01YDmExmtJ0IncS0mUYgSR+ZasDpTGOIE6SdScSkFWJSNSaFVATiKyCPYERcHvIS2J7/ufesl2XZvcRdmpX9z9y5557HZcGzv/1/3zl31RiZyDmUp9Focs0rQyNznOP1G415rVcKcsfUZ1U5yesfyaOXF+eOqXby+ePsr5+ePuUkr9+Y50YuueSSS5OgaeTkWrY0mpxBRuMIvX2FXHJpyuprwcZo6KLhhiZ+htyjIsgtKtxy345zZByU+mm0fqQJmk/21OFDvyBnkaZkB7nk/JrI/K++PkiGwRFeDtC6Udx0LU1VTQg2typOUm/ePhqqPmf6Q5tuFDefPLO3kWdGGofL8Ln9NFy73wQaIY0+nNyj08n9/nRedmmsooK0lBit5+WGjkF+LcoBXu78UCtD3zA/xD2ElPetbumjuDAvU33FxR5yaayG2bzvycm1Of8NAyNUWNNFBexAWako32mUOVdPGexAeSpJ9W8LyPTm7hu3Hf8APZk5NPTGH0ib1kojbr0W+xl7mlnffTR8sYS0jx6wu9O5G5SfGsbPgAEOAABAyGJAAGgAA8AIdQAJhGsBCfTZsMCfjpzt5Gf0E0BBG8oCZuizZ20IL+PnuGBjWf2F+6knO3fcdjH/60s+ovUbnqQmo+V0aEP3EOV+aqDi8z1UmnzvlHI6qhLEtkAjpIvoJ31IJXmcuUyaoRGrfQGdgXfTeJjl0m0BLoBCTmkLPwCHMgYElD9jkAAI8o62USU7Z7O6Thk20Oa/SUmhgx93cIhgDOCBegEllDFegEpcox/GuTRWmP/WQCNUP2cxHZi9npLqmkk3bH3+AzpJ/2jjYdZUkU1n019cogo07voh8o438LKmf5g8PjfQ4Pwg64NYiDX4z62kTTnG8zn21LnaFjp6rMZ07efnRRu/9wg/Q03NHVRy+Awvo/7fpy7xutiYUFqTvIC6uvrY+LNUW9tKnawcExM2arzy/qgPDw8iewiOQ7gNARcIACqWYSBcCYS+oh0ChJRhE8bD3WQn3GNyLkU/mMUBgzPGoY95mHUnamkz0CsHKk3XfnpPyti4hMJCAmiiauq5RS9+0n77Xjo3emJBEEXoPcYd8+Kn12iWr5Y2zfWnO5Xa+W/wDabyFT+UXuPgED3a9BW9ExVifQzL5aQe+4qqHgulAN3dvzBsEzaguhp5LexmwLn9KevW3kduhgEaCdBZHQeHg/zOtId2kj01n8EBYChnwHip4BiHB46nstfw9pMMLvsKyimCQQJ1+wr+yGGT++wGfk7bJF3f1hn61tL7+H2hrY8Xmdrxc366ZRXZS4WV10blUwAXHKUMLLPl0Eooi0FEmcdJYP0aGJQEfNAX90thwMEZ/ZTOBtcI21IPfMGhZA+9/0E9lb5bTX6+ntTV3c/rcP2vw1nky8AzEb3T0E1vXDCQH0uudsmJ1kPnO+lSxlyL/TsHh+nF/7TTukhfu8BG7fyvjE/lwBGa09VLYT191KL3sjoODgf5nT2LJw5iS0q8z5f2fDuccsquUPWXNyku1Jvy10dS4Yk29m89jTIeDqbMNy9T440BmmxZhQ0SwiMNzaRGull9Y+rc2/ttwgZC/sbesIEAkm1bEpgLaeUuBm5ECKCB1iTHcmgIcMDZoA3XGJ/3bIoMrRoTaFBWgqhWcd87Fc/NMIBkxgdxGCC0iWTAABTEGRJ5mTLZ2WSw/nAvqMM4ka8BpLJkVwMd3x7Nf4ZwOYATwAQnNZHEszXB2UAv7Eqh+EVR9Mja31FXjwSdbnauvdBG4TMDSGynQ9lczV8ayJ/Bqua6NO6vyRHczSw6dJEDpZOBR8Pqz7L2Wb7M5bB7+evcWX/pTRQ73fa8s6WJzP/62YvG1AE4tmADIX9jL9hEBeoYcPxM/5aADa4Bm6hALS//v2QdNpUnSY08ZgywMGjsRka36wxA0bY/XeBucDhqdSqGQ+IMdzPQyVMXTbCAIwGMhLBvZ//rH5iuARiESMr9PCWHP+ZngArgUY63h5CHgdPAhAEIGhkUGuW2RkW/QNYeKE8qhE/oL/I8nbJrwbUIq3DgGiACmHAvvGGRt8HPwRiA6E5Vd+GqotzGz2EMKO8xx/PCy+Um8PjJLmc7+0DYy+p3P7mGMtKX0iuvV9Crr1fSb3en0JURKTz117rzkAoCSA6dN9CvTl41tYE2EQw6P4uV+scGT8xBWZLa+d8Q+iD163zG1M/pukknQqfbHs/cDQ5HrE7tSQ7n//4Vl7s5eIQCPNmq2CPBFMngBJcT4OlOR84ZuDPiH0waI1W39lLm4mB+TmCQ6uwbomIW0jbw/tMoa+UM7pY+Y+0AWcGHV/mca+iw7Jqs/nZqqa7RWk6GIXejVsaeJofBZi2DQu5vjphCKZGrSZdzLX+R4SKAAogcld3LkhXPMXe0ijmcDbwNdSJXg/BLgk0Lv6/I59yJxMqRkMjJ2Fu5R9tGXdvz59TLgPnl7jf5GeEUQLLr+TIOnSN7N9L7J+o5YOIfiqLUdXG8/P6Jz2n1qgc5aFK/s5DXP33wc36PxLcvS/di4dQzi++hnxxrpnVRenp+aQgLszp5nma5XmtyNrP0d56DUjv/+z19LNb7styNWjX02Bc2eNMXbZzDnU4e+1sZ+ka/luM/n2da6RQQAkSyVkoOFzBJ/HMdhxUE4KAfoLOZhWEYz1c2W/soe6WUmypiIDL0jv+et8tv56b9Zj+egXAIIAAQ3mSgUcIGEuHVfBZCSfXx/LyP5XoAF+F0ABwRfmEsXA/ujT64hyN3M8N5WMqpiHBImTS2h5CMFqHXRATXggNQgTNBjgZhEkIn1O9KW8LbEF5BfnoddziAzsdVDfTj7Qd5+46tiaZwKXa6Jz2/bAZzMG4slNLSO43SHpdNcwO4m1k+U3qzwPHUdNgvjFKrfq03fdMUF+ZDmQ/fwwGS+97oMD+JuReAI7X4AnMzHTy0Ov7EPFM7nFDSn+pNgMopa2SupY0KWO4HMIL7AcRm763m9y9IYfUrJOAY+scHrNUU+LS4GFKjoRuWmTViZcXAXBp9BDlScDfQWzJoIhShkQiDlrEEsBCAc+rDX3OXA5XLbkaEYk3NNyjn6TdM/WvsHEqZC7ABUARcREyOfAwSvJggC1kf0Y6ytWt8qiHPI4TcTYIdgCXCpnnRMzhA5t0fwoEDdwPBtSBM2vVcGb9GH2j1ygf4GfmeHZsT+MqVcCmACQ5Ax5+t2mClCXrtbAe9VnOdtldKf3uETle6b9kNNGrnf0h7o8X6dk/1ryNKb98QquJiFxV+2MahkL9+1qg2sQ3C3O0ox1a33rzdXwaI6I/QSaqX7nNDcR9lqGYuq7+h+0J1G+6GOrRkHNSMydsYVcIG4ZOjdxMDLMok8c7sZH4WIRAEAAEmNawOiWLU18oQQbiF8SLXg7yPMqK3Z5J4PH0hOw1AQqxAIbcDcAAUWCpHHVaekIfJlGGC/sjVwBmJvjijD+r85XslvXqRgwtlYbEnKiSA4x+KZGFQ3Kj6edEhtIPlZk4z94Iwa/WqB8jXV0dLZNiEyUli5GwQPkFwNstn+tCKmaPDFIAHoRRWqj5iNn5dlC/VtA9QbJCn3O5D9pDa+R/SfoU8B26Oydu0e6kL5QAaR+RrspkjWRjqw8KcmVRWYzDVV7GQCI6kaNMcFrL3sg8xX5qIij+5xh1OVU4sz8+IpDPmTVXOAio+c402l1weM87qb+iRuIwfyMrbUl+tnrzjukfVDc9QZy/d528jR0vpWgCVtckLeFm4GoRZCIv2sNyOMkEs+hf8fhNtYcvdEEIosYQOWKFeOB5HC3tiAIEUee8MHA9yPKWsjCVttONIkUMu5GJwLVwMwiPRniLvMsYnHe4F54TVL0Of+lybuVavfJAflrR9SyJtV17LZ7iZvYXlUvjEgCSE5WsclvTMomB+mKvisdlkL2Hu4zEE7A62pSWfHePL30rVBap7E2ctsN8KEXIryNE0yEvbmw9dYuFUMPvw0PEkMbG2zn6ESXU81xIZhJxOC08QI/+CVSvxIQNHg3uhHhLjpTBLGu/PXA5yOEgQ474Yf+TcDYuvzSZOvffspM6KNFvdqK9OT14xPSZ3MxzirWrZWzwr5WgBGNhDA7cSER5oSuaivJOBA2coXd6419ws/cFiYmbSRhZSYWMfQiocyk186LtTBs9kCHBJkR0KQCH24eTJCV9AQ4AFdblsSbuK9dHI4xPlcAnjMWnQFytZuI8A1EEZSJOluvNt3A0hTzPRfTiOlk9+LnUm2Z7/S/9bTqcXJpvcTT0DTYuK3wWuBs9K2UuADQ4h85xNxSUp34WQKPvvjRbGK8InNj/Mx4rxuK+l8ZbqhGzCBnQHcGxtbjIOulHX8enkv6adjIySQ5G2aY1dw3g+iibp+4ssbbxDeKVM7MLdiP00SgEqT1mAynj1jpAyCSzcR+lW6ZNc7AIWy9toFxv+ABHRHqkIjdCnUc7nIOTCpj8I48Q9J0NYgcLxTZTa+e850Esb3y2kgxt2U5fHNDo9I5BsCU+Bl665d0rsHoZUBYreudKGO1t/8FttOuob+S65L79KxqEvrfaFo3E9iKle/I1vtlwNwYUId1Op6CueqYLEQ5iNCtAoy9hfI0ADoex6GPO21M7/qJZ6+lHvaXo84fvUbWODLhwNQDOVHsRUnZXCH1yXmU59eS9Rf/FbY9rxCaDLSCfPzDTpye6ql2ik7SQvKwU3gxyNe8w2uz8PdTcLcXSxlQclLbVNxn6dqSK1838Jm/9l3SzX8amBKlr7+f4ZpeBmkKPJjvWbMo5GaEIpcPeocNIX5fNDmTQ2//IguBaPlfm8POrLs9jytus7bFxyVon575OfNyppbD7/sbJUlCglr5VfnuWoVSdn0df+zUFyNUKYpCHHafB0EjmDRpzla7VdsilNgJ/q+T+Vv5nPXE6P2ZGOCnIGuWDj0lSX639XcMkllyZF/wMhyD+qzmh6oAAAAABJRU5ErkJggg==" alt="Payment icons image"/></div>
<button
        onClick={scrollToTop}
        className="  text-white hover:underline"
      >
        Scroll To Top ⬆️
      </button>
</section>
    </div>
  );
}

export default Product;
