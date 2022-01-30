import {
    Textarea,
    HStack,
    StackDivider,
    Heading,
    VStack,
    useClipboard,
    useToast,
    Center
} from '@chakra-ui/react'
import { SetStateAction, useState } from 'react'
import './App.css'

function App() {
    const [textValue, setTextValue] = useState('')
    const [jsonValue, setJsonValue] = useState('')
    const toast = useToast()
    const { hasCopied, onCopy } = useClipboard(jsonValue)

    const inputChange = (e: { target: { value: SetStateAction<string> } }) => {
        setTextValue(e.target.value)
        const obj = JSON.parse(textValue);
        setJsonValue(JSON.stringify(obj, null, 2));
    }

    const addClipboard = (e: any) => {
        onCopy()
        toast({
            title: 'Copy Status',
            description: hasCopied ? 'Copy Successful' : 'Copy Unsuccessful',
            status: hasCopied ? 'success' : 'error',
            duration: 5000,
            isClosable: true,
        })
    }

    return (
        <div className="App">
          <Center> 
            <Heading as="h1" mt={16} size={'2xl'}>JSON Formatter</Heading>
          </Center>
            <div id="textAreas">
                <HStack
                    spacing="64px"
                    mt="64px"
                    mx="64px"
                    divider={<StackDivider borderColor="gray.200" />}
                >
                    <VStack width={'full'} spacing={'32px'}>
                        <Heading as="h2" size={'xl'}>Input</Heading>
                        <Textarea
                            height={'850px'}
                            value={textValue}
                            onChange={inputChange}
                            resize={'none'}
                        />
                    </VStack>
                    <VStack width={'full'} spacing={'32px'}>
                        <Heading as="h2" size={'xl'}>Output</Heading>
                        <Textarea
                            onClick={addClipboard}
                            height={'850px'}
                            readOnly={true}
                            value={jsonValue}
                            resize={'none'}
                        />
                    </VStack>
                </HStack>
            </div>
        </div>
    )
}

export default App