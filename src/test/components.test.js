import {
    render,
    fireEvent,
    waitFor,
    screen
} from "@testing-library/react"
import "@testing-library/jest-dom"
//components
import BottomButton from "../components/base/BottomButton"
import Person from "../components/Person"



test("loads and displays greeting BottomButton", () => {

    //mock
    let color = "red";
    let text = "test click!";
    let clikedTest = "test clicked!";
    let click = () => text = clikedTest;

    //Arrange
    render(<BottomButton color={color} text={text} click={click} />);

    //action
    fireEvent.click(screen.getByText(text));

    //assert
    expect(text).toEqual(clikedTest)
    expect(screen.getByText("test click!").className).toEqual("btn " + color)

})

test("loads and displays greeting Person", () => {

    //mock
    let person = {
        name: "Craig McKay",
        age: 42,
        pictureUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }

    //Arrange
    render(<Person
        name={person.name}
        age={person.age}
        pictureUrl={person.pictureUrl} />)
    
    //action
    fireEvent.click(screen.getByText(person.name))

    let element=screen.getByText(person.name).parentElement.parentElement
    //assert
    expect(element.children[0].children[0].getAttribute("src")).toEqual(person.pictureUrl)
    expect(element.children[1].children[0].textContent).toEqual(person.name)
    expect(element.children[1].children[1].textContent).toContain(person.age.toString())

})
