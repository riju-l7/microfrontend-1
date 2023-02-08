const Navbar = (props) => {
  return (
    <nav className='bg-gray-300 mb-10'>
      <ul className='flex flex-row justify-start items-center border-gray-1000'>
        <li className='mx-5 my-5 font-semibold'>
          <a href='/home'>home</a>
        </li>
        |
        {(!props?.root_mfe || props?.root_mfe === 'customer') && (
          <li className='mx-5 my-5 font-semibold'>
            <a href='/customer'>Customer</a>
          </li>
        )}
        |
        {(!props?.root_mfe || props?.root_mfe === 'order') && (
          <li className='mx-5 my-5 font-semibold'>
            <a href='/order'>Order</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
