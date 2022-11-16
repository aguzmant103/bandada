import React, { useEffect } from "react"
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Spacer,
    Text,
    Tooltip,
    useClipboard
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from "@web3-react/injected-connector"
import { providers } from "ethers"
import { shortenAddress } from "@utils"

const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
})

export default function NavBar(): JSX.Element {
    const { activate, account } = useWeb3React<providers.Web3Provider>()
    const { hasCopied, onCopy } = useClipboard(account || "")

    useEffect(() => {
        ;(async () => {
            if (await injectedConnector.isAuthorized()) {
                await activate(injectedConnector)
            }
        })()
    }, [activate])

    return (
        <Box bgColor="#F8F9FF" borderBottom="1px" borderColor="gray.200">
            <Container maxWidth="container.xl">
                <Flex h="100px">
                    <Center>
                        <Link to="/">
                            <Text fontSize="lg" fontWeight="bold">
                                ZK Groups
                            </Text>
                        </Link>
                    </Center>
                    <Spacer />
                    <Center>
                        {account ? (
                            <Tooltip
                                label={hasCopied ? "Copied" : "Copy"}
                                closeOnClick={false}
                                hasArrow
                            >
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={onCopy}
                                    sx={{ marginRight: 10 }}
                                >
                                    {shortenAddress(account)}
                                </Button>
                            </Tooltip>
                        ) : (
                            <Button
                                mr="10px"
                                onClick={() => activate(injectedConnector)}
                            >
                                Connect wallet
                            </Button>
                        )}
                    </Center>
                </Flex>
            </Container>
        </Box>
    )
}