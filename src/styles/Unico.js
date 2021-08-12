import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
    
`
export const Content = styled.div`
    margin-top: 30px;
    display: grid;
    grid-grap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
`
export const Wrap = styled.div`
    padding-top: 50%;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
      }

      &:hover {
        box-shadow: -5px -5px 30px 5px black, 5px 5px 30px 5px black;

      }
`