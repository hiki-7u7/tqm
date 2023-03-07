import { Button } from '@mui/material';
import styles from '../styles/auth.module.css';
import PaletteIcon from '@material-ui/icons/Palette';
import { useRef } from 'react';
import { display } from '@mui/system';

interface Props {
  title?: string;
  children: JSX.Element | JSX.Element[];
}


export const AuthLayout = ({ title, children }: Props ) => {

  const inputColor = useRef<HTMLInputElement>(null)

  const handleInputColor = () => {
    if (inputColor.current) {
      inputColor.current.click();
    }
  }

  return (
    <>
    
      <div className={styles['auth-container-layout']}>
        
          <div className={styles['auth-container-layout-div']}>

              <h1>{ title }</h1>
              
              { children }
              
          </div>


        <div style={{
          position: "absolute",
          top: 10,
          right: 10,
          display: 'flex',
          flexDirection: 'column'
        }}>

          <Button
            variant="contained"
            color='inherit'
            startIcon={<PaletteIcon /> }
            onClick={handleInputColor}
          />
          <input 
            ref={ inputColor } 
            type="color" 
            style={{ 
              opacity: 0, 
              visibility: "hidden",
            }}
          />
          
        </div>

      </div>


    
    </>
  )
}
