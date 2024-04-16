enum UserResponse {
    No = 0,
    Yes = 1,
}

function respondedEmail(recipient: string, userResponse: UserResponse): void {
    // ... Salvar no banco se o usuário respondeu ou não
}

respondedEmail('KayoThyerre', UserResponse.Yes);