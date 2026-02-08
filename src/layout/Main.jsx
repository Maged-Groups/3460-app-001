import FormInput from "../components/molecules/FormInput";
import Alert from '../components/atoms/Alert';


import Box from '../components/atoms/Box';


export default function Main() {

    return (
        <main>
            <FormInput label='First Name' />
            <FormInput label='Age' type='number' />
            <FormInput label='Hire Date' type='date' />
            <FormInput />
            <FormInput />
            <hr />

            <Box title='Box A Title' clr='text-red-500' />
            <Box title='Box B Title' clr='text-green-400' />
            <Box title='This is a new Box' clr='text-pink-700' />

            <hr />
            <Alert>
                <div className='p-3 rounded m-2'>
                    <h2 className="text-3xl uppercase text-bold text-sky-600">
                        The Alert Title
                    </h2>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere atque totam reiciendis, nulla magni quasi ex tempore nam iure fuga et eligendi aperiam facilis accusamus, aut quos magnam a.
                    </div>

                    <div>
                        Footer
                    </div>
                </div>
            </Alert>

            <Alert>
                <div className='p-3 rounded m-2'>


                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere atque totam reiciendis, nulla magni quasi ex tempore nam iure fuga et eligendi aperiam facilis accusamus, aut quos magnam a.
                    </div>

                </div>
            </Alert>

            <Alert name='xyz'>
                <div className='p-3 rounded m-2'> 
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere atque totam reiciendis, nulla magni quasi ex tempore nam iure fuga et eligendi aperiam facilis accusamus, aut quos magnam a.
                    </p>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere atque totam reiciendis, nulla magni quasi ex tempore nam iure fuga et eligendi aperiam facilis accusamus, aut quos magnam a.
                    </p>
                </div>

                <div>
                    Second Child
                </div>

                <div>
                    Third Child
                </div> 
            </Alert>
        </main>
    )
}