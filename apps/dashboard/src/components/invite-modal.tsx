import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    UseDisclosureProps
} from "@chakra-ui/react"
import { useState } from "react"
import { FaRegCopy } from "react-icons/fa"

export default function InviteModal({
    isOpen,
    onClose
}: UseDisclosureProps): JSX.Element {
    const [_inviteLink, setInviteLink] = useState<string>(
        "https://www.zkgroups.com/invite/redeem/YUxc"
    )
    const copyLink = async () => {
        navigator.clipboard.writeText(_inviteLink)
    }

    return (
        <Modal isOpen={!!isOpen} onClose={onClose ? onClose : console.error}>
            <ModalOverlay />
            <ModalContent maxW="600px">
                <ModalHeader borderBottom="1px" borderColor="gray.200">
                    Generate a unique invitation
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl marginY="10px">
                        <FormLabel color="gray.500" fontWeight="700">
                            Invite link
                        </FormLabel>
                        <Flex alignItems="center">
                            <InputGroup>
                                <Input
                                    value={_inviteLink}
                                    fontSize="16px"
                                    color="gray.500"
                                />
                                <InputRightElement>
                                    <IconButton
                                        aria-label="Copy button"
                                        icon={<FaRegCopy />}
                                        onClick={copyLink}
                                        variant="solid"
                                        h="100%"
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <Button
                                variant="solid"
                                colorScheme="primary"
                                ml="10px"
                            >
                                New Link
                            </Button>
                        </Flex>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}