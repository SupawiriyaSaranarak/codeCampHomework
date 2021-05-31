import styled from '@emotion/styled'

const StyledButton = styled.button`
border-radius: 5px;
background-color: khaki;
height: 40px;
width: 120px;
color: ${(props) => (props.primary ? "crimson" : "cornflowerblue")};
`

function Button(props) {
    // return <StyledButton >{props.children}</StyledButton> ถ้าไม่มี พรอพส์ไม่มา ต้องใส่ พรอพส์ไปด้วย
    return <StyledButton {...props}>{props.children}</StyledButton>
    // return <StyledButton onClick={props.onClick} primary={props.primary}>{props.children}</StyledButton> ระเบิดพรอพส์ออกมาแล้วไม่ต้อง
}

export default Button