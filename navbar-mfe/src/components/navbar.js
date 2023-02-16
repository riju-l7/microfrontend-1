const Navbar = (props) => {
  const contextId = props?.contextId;
  const useCookies = props?.useCookies;
  console.log('navbar props', props);
  return (
    <nav className='bg-gray-300 mb-10'>
      <ul className='flex flex-row justify-start items-center border-gray-1000'>
        <li className='mx-5 my-5 font-semibold'>
          <a href={'/home?contextId='+ props?.contextId}> home</a>
        </li>
        |
        {(!props?.root_mfe || props?.root_mfe === 'customer') && (
          <li className='mx-5 my-5 font-semibold'>
            <a href={'/customer?contextId='+ props?.contextId}>Customer</a>
          </li>
        )}
        |
        {(!props?.root_mfe || props?.root_mfe === 'order') && (
          <li className='mx-5 my-5 font-semibold'>
            <a href={'/order?contextId='+ props?.contextId}>Order</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
