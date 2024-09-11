const messages = {
  pt: {
    translations: {
      signup: {
        title: 'Cadastre-se',
        toasts: {
          success: 'Usuário criado com sucesso! Faça login!',
          fail: 'Erro ao criar usuário. Verifique os dados informados.',
        },
        form: {
          name: 'Nome',
          email: 'Email',
          password: 'Senha',
        },
        buttons: {
          submit: 'Registrar',
          login: 'Já tem uma conta? Faça login!',
        },
      },
      login: {
        title: 'Entrar',
        form: {
          email: 'Email',
          password: 'Senha',
        },
        buttons: {
          submit: 'Entrar',
          register: 'Não tem uma conta? Registre-se!',
        },
      },
      auth: {
        toasts: {
          success: 'Login realizado com sucesso!',
        },
      },
      dashboard: {
        charts: {
          perDay: {
            title: 'Tickets hoje: ',
          },
        },
      },
      connections: {
        title: 'Conexões',
        toasts: {
          deleted: 'Conexão com o WhatsApp excluída com sucesso!',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage: 'Tem certeza? Isso não pode ser revertido.',
          disconnectTitle: 'Desconectar',
          disconnectMessage:
            'Tem certeza? Você precisará escanear o QR Code novamente.',
        },
        buttons: {
          add: 'Adicionar WhatsApp',
          disconnect: 'Desconectar',
          tryAgain: 'Tentar novamente',
          qrcode: 'QR CODE',
          newQr: 'Novo QR CODE',
          connecting: 'Conectando',
        },
        toolTips: {
          disconnected: {
            title: 'Falha ao iniciar sessão no WhatsApp',
            content:
              'Certifique-se de que seu celular está conectado à internet e tente novamente, ou solicite um novo QR Code',
          },
          qrcode: {
            title: 'Aguardando leitura do QR Code',
            content:
              "Clique no botão 'QR CODE' e leia o QR Code com seu celular para iniciar a sessão",
          },
          connected: {
            title: 'Conexão estabelecida',
          },
          timeout: {
            title: 'Conexão com o celular foi perdida',
            content:
              "Certifique-se de que seu celular está conectado à internet e o WhatsApp está aberto, ou clique no botão 'Desconectar' para obter um novo QR Code",
          },
        },
        table: {
          name: 'Nome',
          status: 'Status',
          lastUpdate: 'Última Atualização',
          default: 'Padrão',
          actions: 'Ações',
          session: 'Sessão',
        },
      },
      whatsappModal: {
        title: {
          add: 'Adicionar WhatsApp',
          edit: 'Editar WhatsApp',
        },
        form: {
          name: 'Nome',
          default: 'Padrão',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'WhatsApp salvo com sucesso.',
      },
      qrCode: {
        message: 'Leia o QrCode para iniciar a sessão',
      },
      contacts: {
        title: 'Contatos',
        toasts: {
          deleted: 'Contato excluído com sucesso!',
        },
        searchPlaceholder: 'Pesquisar ...',
        confirmationModal: {
          deleteTitle: 'Excluir',
          importTitlte: 'Importar contatos',
          deleteMessage:
            'Tem certeza que deseja excluir este contato? Todos os tickets relacionados serão perdidos.',
          importMessage: 'Deseja importar todos os contatos do telefone?',
        },
        buttons: {
          import: 'Importar Contatos',
          add: 'Adicionar Contato',
        },
        table: {
          name: 'Nome',
          whatsapp: 'WhatsApp',
          email: 'Email',
          actions: 'Ações',
        },
      },
      contactModal: {
        title: {
          add: 'Adicionar contato',
          edit: 'Editar contato',
        },
        form: {
          mainInfo: 'Detalhes do contato',
          extraInfo: 'Informações adicionais',
          name: 'Nome',
          number: 'Número do WhatsApp',
          email: 'Email',
          extraName: 'Nome do campo',
          extraValue: 'Valor',
        },
        buttons: {
          addExtraInfo: 'Adicionar informação',
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Contato salvo com sucesso.',
      },
      queueModal: {
        title: {
          add: 'Adicionar fila',
          edit: 'Editar fila',
        },
        form: {
          name: 'Nome',
          color: 'Cor',
          greetingMessage: 'Mensagem de boas-vindas',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
      },
      userModal: {
        title: {
          add: 'Adicionar usuário',
          edit: 'Editar usuário',
        },
        form: {
          name: 'Nome',
          email: 'Email',
          password: 'Senha',
          profile: 'Perfil',
        },
        buttons: {
          okAdd: 'Adicionar',
          okEdit: 'Salvar',
          cancel: 'Cancelar',
        },
        success: 'Usuário salvo com sucesso.',
      },
      chat: {
        noTicketMessage: 'Selecione um ticket para começar a conversar.',
      },
      ticketsManager: {
        buttons: {
          newTicket: 'Novo',
        },
      },
      ticketsQueueSelect: {
        placeholder: 'Filas',
      },
      tickets: {
        toasts: {
          deleted: 'O ticket em que você estava foi excluído.',
        },
        notification: {
          message: 'Mensagem de',
        },
        tabs: {
          open: { title: 'Caixa de entrada' },
          closed: { title: 'Resolvidos' },
          search: { title: 'Pesquisar' },
        },
        search: {
          placeholder: 'Pesquisar tickets e mensagens.',
        },
        buttons: {
          showAll: 'Todos',
        },
      },
      transferTicketModal: {
        title: 'Transferir Ticket',
        fieldLabel: 'Digite para pesquisar usuários',
        noOptions: 'Nenhum usuário encontrado com este nome',
        buttons: {
          ok: 'Transferir',
          cancel: 'Cancelar',
        },
      },
      ticketsList: {
        pendingHeader: 'Fila',
        assignedHeader: 'Trabalhando em',
        noTicketsTitle: 'Nada aqui!',
        noTicketsMessage:
          'Nenhum ticket encontrado com este status ou termo de pesquisa.',
        buttons: {
          accept: 'Aceitar',
        },
      },
      newTicketModal: {
        title: 'Criar Ticket',
        fieldLabel: 'Digite para pesquisar um contato',
        add: 'Adicionar',
        buttons: {
          ok: 'Salvar',
          cancel: 'Cancelar',
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: 'Painel',
          connections: 'Conexões',
          tickets: 'Tickets',
          contacts: 'Contatos',
          queues: 'Filas',
          administration: 'Administração',
          users: 'Usuários',
          settings: 'Configurações',
        },
        appBar: {
          user: {
            profile: 'Perfil',
            logout: 'Sair',
          },
        },
      },
      notifications: {
        noTickets: 'Sem notificações.',
      },
      queues: {
        title: 'Filas',
        table: {
          name: 'Nome',
          color: 'Cor',
          greeting: 'Mensagem de boas-vindas',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar fila',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Tem certeza? Isso não pode ser revertido! Tickets nesta fila ainda existirão, mas não terão mais fila atribuída.',
        },
      },
      queueSelect: {
        inputLabel: 'Filas',
      },
      users: {
        title: 'Usuários',
        table: {
          name: 'Nome',
          email: 'Email',
          profile: 'Perfil',
          actions: 'Ações',
        },
        buttons: {
          add: 'Adicionar usuário',
        },
        toasts: {
          deleted: 'Usuário excluído com sucesso.',
        },
        confirmationModal: {
          deleteTitle: 'Excluir',
          deleteMessage:
            'Todos os dados do usuário serão perdidos. Os tickets abertos do usuário serão movidos para a fila.',
        },
      },
      settings: {
        success: 'Configurações salvas com sucesso.',
        title: 'Configurações',
        settings: {
          userCreation: {
            name: 'Criação de usuários',
            options: {
              enabled: 'Habilitado',
              disabled: 'Desabilitado',
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: 'Atribuído a:',
          buttons: {
            return: 'Retornar',
            resolve: 'Resolver',
            reopen: 'Reabrir',
            accept: 'Aceitar',
          },
        },
      },
      messagesInput: {
        placeholderOpen: 'Digite uma mensagem',
        placeholderClosed:
          'Reabra ou aceite este ticket para enviar uma mensagem.',
        signMessage: 'Assinar',
      },
      contactDrawer: {
        header: 'Detalhes do contato',
        buttons: {
          edit: 'Editar contato',
        },
        extraInfo: 'Outras informações',
      },
      ticketOptionsMenu: {
        delete: 'Excluir',
        transfer: 'Transferir',
        confirmationModal: {
          title: 'Excluir ticket #',
          titleFrom: 'do contato ',
          message:
            'Atenção! Todas as mensagens relacionadas ao ticket serão perdidas.',
        },
        buttons: {
          delete: 'Excluir',
          cancel: 'Cancelar',
        },
      },
      confirmationModal: {
        buttons: {
          confirm: 'Ok',
          cancel: 'Cancelar',
        },
      },
      messageOptionsMenu: {
        delete: 'Excluir',
        reply: 'Responder',
        confirmationModal: {
          title: 'Excluir mensagem?',
          message: 'Essa ação não pode ser revertida.',
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP:
          'Deve haver pelo menos uma conexão padrão com o WhatsApp.',
        ERR_NO_DEF_WAPP_FOUND:
          'Nenhum WhatsApp padrão encontrado. Verifique a página de conexões.',
        ERR_WAPP_NOT_INITIALIZED:
          'Essa sessão do WhatsApp não foi inicializada. Verifique a página de conexões.',
        ERR_WAPP_CHECK_CONTACT:
          'Não foi possível verificar o contato no WhatsApp. Verifique a página de conexões.',
        ERR_WAPP_INVALID_CONTACT: 'Este não é um número de WhatsApp válido.',
        ERR_WAPP_DOWNLOAD_MEDIA:
          'Não foi possível baixar a mídia do WhatsApp. Verifique a página de conexões.',
        ERR_INVALID_CREDENTIALS:
          'Erro de autenticação. Por favor, tente novamente.',
        ERR_SENDING_WAPP_MSG:
          'Erro ao enviar mensagem no WhatsApp. Verifique a página de conexões.',
        ERR_DELETE_WAPP_MSG: 'Não foi possível excluir a mensagem do WhatsApp.',
        ERR_OTHER_OPEN_TICKET: 'Já existe um ticket aberto para este contato.',
        ERR_SESSION_EXPIRED:
          'Sessão expirada. Por favor, faça login novamente.',
        ERR_USER_CREATION_DISABLED:
          'A criação de usuários foi desativada pelo administrador.',
        ERR_NO_PERMISSION: 'Você não tem permissão para acessar este recurso.',
        ERR_DUPLICATED_CONTACT: 'Já existe um contato com este número.',
        ERR_NO_SETTING_FOUND: 'Nenhuma configuração encontrada com este ID.',
        ERR_NO_CONTACT_FOUND: 'Nenhum contato encontrado com este ID.',
        ERR_NO_TICKET_FOUND: 'Nenhum ticket encontrado com este ID.',
        ERR_NO_USER_FOUND: 'Nenhum usuário encontrado com este ID.',
        ERR_NO_WAPP_FOUND: 'Nenhum WhatsApp encontrado com este ID.',
        ERR_CREATING_MESSAGE: 'Erro ao criar a mensagem no banco de dados.',
        ERR_CREATING_TICKET: 'Erro ao criar o ticket no banco de dados.',
        ERR_FETCH_WAPP_MSG:
          'Erro ao buscar a mensagem no WhatsApp, talvez seja muito antiga.',
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          'Essa cor já está em uso, escolha outra.',
        ERR_WAPP_GREETING_REQUIRED:
          'Mensagem de boas-vindas é obrigatória se houver mais de uma fila.',
      },
    },
  },
};
