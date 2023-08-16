import { Rings } from 'react-loader-spinner'
import { styled } from 'styled-components'



<Rings
  height="80"
  width="80"
  color="#4fa94d"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>

export const Loader = styled.div`
    position: absolute;
    z-index: 1200;
    left: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`