Feature: Teste do fluxo de login e navegação na aplicação

  Scenario: Login bem-sucedido
    Given Eu acesso o site
    When Eu faço login com "admin@yourstore.com" e "admin"
    Then Eu devo ser redirecionado para a página de dashboard
    And Eu devo ver o nome do usuário "admin"

  Scenario: Navegar para a página de configurações
    Given Eu estou logado
    When Eu navego para a página de configurações
    Then Eu devo ver a seção de configurações

  Scenario: Realizar logout
    Given Eu estou logado
    When Eu clico no botão de logout
    Then Eu devo ser redirecionado para a página de login

  Scenario: Atualizar perfil do usuário
    Given Eu estou logado
    When Eu atualizo meu perfil
    Then Eu devo ver a mensagem de sucesso "Perfil atualizado com sucesso"

  Scenario: Editar um item na lista
    Given Eu estou logado e na página de lista de itens
    When Eu edito um item na lista
    Then Eu devo ver o item atualizado na lista
