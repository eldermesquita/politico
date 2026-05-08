

const funcoes = {
    //Use a função  para gerar o slug do título e adicioná-lo à URL:
    slugUrl(_texto) {
        if (!_texto) return ''
        let resultado = _texto
            .toString()
            .toLowerCase()
            .replaceAll(/[àáâãäåªÀÁÂÃÄÅ]/g, 'a')
            .replaceAll(/[èéêëÈÉÊË]/g, 'e')
            .replaceAll(/[ìíîïÌÍÎÏ]/g, 'i')
            .replaceAll(/[òóôõöºÒÓÔÕÖ]/g, 'o')
            .replaceAll(/[ùúûüÙÚÛÜ]/g, 'u')
            .replaceAll(/[ýÿŸÝ]/g, 'y')
            .replaceAll(/[ñÑ]/g, 'n')
            .replaceAll(/[çÇ]/g, 'c')
            .replaceAll(/ß/g, 'ss')
            .replaceAll(/[Ææ]/g, 'ae')
            .replaceAll(/[Øøœ]/g, 'oe')
            .replaceAll('%', 'pct')
            .replaceAll(/\s+/g, '-')
            .replaceAll(/[^\w-]+/g, '')
            .replaceAll(/--+/g, '-')
            .replaceAll(' ', '-');
        // Remover hífens do final sem regex
        while (resultado.endsWith('-')) {
            resultado = resultado.slice(0, -1)
        }
        return resultado
    },
    removerAcentos(palavra) {
        return palavra.normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '')
    },

    primeiraLetraMaiuscula(string) {
        if (!string || typeof string !== 'string') return ''

        return string
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    },
    // Função para formatar Date para 'yyyy-mm-dd'
    formatarDataBanco(date) {
        if (!date) return null
        const d = new Date(date)
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    },

    formatarMoedaPtBr(_value) {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(_value || 0)
    },
    formatarDataPtBr(_value) {
        const dataBr = Intl.DateTimeFormat('pt-BR').format(
            new Date(_value.length === 10 ? _value.split('-') : _value)
        )
        return _value ? dataBr : _value
    },
    formatarDataTimeZonePtBr(_value) {
        // Ex: "2024-09-20T09:16:33.929038";
        // Remover microsegundos (últimos 3 dígitos) para compatibilidade com o objeto Date
        const truncatedDateString = _value.slice(0, 23)
        // Criar um objeto Date
        const date = new Date(truncatedDateString)

        // Exibir a data formatada com fuso horário local
        return date.toLocaleString(
            'pt-BR'
            /* , {
          timeZoneName: "short" // Exibe o nome do fuso horário
        } */
        )
    },
    formatarDataTZPtBrSemTimeZone(_value) {
        const date = new Date(_value)
        return date.toLocaleDateString('pt-BR')
    },

    formatarDataPorExtenso(_data, comDiaDaSemana = true) {
        const date = new Date(_data)

        const opcoes = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            ...(comDiaDaSemana && { weekday: 'long' }),
        }

        return new Intl.DateTimeFormat('pt-BR', opcoes).format(date)
    },

    formatDatePtBrExtenso(_date) {
        const date = new Date(_date)
        return date
            .toLocaleDateString('pt-BR', {
                weekday: 'long',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            })
            .replaceAll('.', '')
    },

    formataDataTimePtBr(_value) {
        return _value
            ? Intl.DateTimeFormat('pt-BR', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
              }).format(new Date(_value))
            : _value
    },

    formatarDataBR(dataStr) {
        const [dia, mes, ano] = dataStr.split('/').map(Number)

        const data = new Date(ano, mes - 1, dia)

        const diaSemana = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(data)
        const diaNum = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(data)
        const mesAbrev = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(data)
        const anoNum = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(data)

        return `${diaSemana}, ${diaNum} de ${mesAbrev} de ${anoNum}`
    },

    verificarDataLimite(dataLimiteStr) {
        const partes = dataLimiteStr.split('/')
        const dataLimite = new Date(`${partes[2]}-${partes[1]}-${partes[0]}`)
        // Obtem a data atual (com hora zerada)
        const hoje = new Date()
        console.log('🚀  ~ dataLimite: ', dataLimite)
        console.log('🚀 ~ hoje : ', hoje)
        //hoje.setHours(0, 0, 0, 0)

        // Compara as datas
        return dataLimite >= hoje
    },

    formatarCPF(cpf) {
        return cpf
            .replaceAll(/\D/g, '')
            .slice(0, 11)
            .replaceAll(/(\d{3})(\d)/, '$1.$2')
            .replaceAll(/(\d{3})(\d)/, '$1.$2')
            .replaceAll(/(\d{3})(\d{1,2})$/, '$1-$2')
    },

    faleConosco(_whatsapp, _texto) {
        const link = `https://api.whatsapp.com/send?phone=${_whatsapp}&text="+${_texto}`
        window.open(link, '_blank', 'width=1200, height=600, scrollbars=yes')
    },

    textoComReticencias(texto, limite) {
        if (texto?.length <= limite) return texto
        // Encontrar o último espaço antes do limite
        let corte = texto?.lastIndexOf(' ', limite)
        if (corte === -1) corte = limite // Se não encontrar espaço, corta direto

        return texto?.slice(0, corte) + ' ...'
    },

    formatarDataQuebrada(dataString) {
        const meses = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
        ]

        const [ano, mes, dia] = dataString.split('-')

        return {
            ano: ano,
            mes: meses[parseInt(mes, 10) - 1],
            dia: dia,
        }
    },


    validarEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    },

    //validar senhas correspondentes
    validateSenha(senha, confirmarSenha) {
        if (senha && confirmarSenha && senha !== confirmarSenha) {
            return { match: false, message: 'As senhas não coincidem.' }
        } else {
            return { match: true, message: '' }
        }
    },

    validarFormFields(formData) {
        let valid = true
        const newErrors = {} // Erros do formulário
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = 'Este campo é obrigatório.'
                valid = false
            }
        })
        return { valid, newErrors }
    },

    formatatarTamanhoDoArquivo(bytes) {
        if (bytes === 0) return '0 B'
        const k = 1024
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        const resultado = parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
        return resultado
    },



    converterFormData(formData, key, data) {
        if (data instanceof File) {
            formData.append(key, data, data.name)
            return
        }

        if (data instanceof Date) {
            formData.append(key, data.toISOString())
            return
        }

        if (typeof data === 'boolean') {
            formData.append(key, data ? '1' : '0')
            return
        }

        if (typeof data === 'number') {
            formData.append(key, String(data))
            return
        }

        if (
            data === null ||
            data === undefined ||
            data === '' ||
            data === 'null' ||
            data === 0 ||
            data === '0' ||
            !data
        ) {
            formData.append(key, '')
            return
        }

        if (typeof data === 'object') {
            for (const i in data) {
                if (!Object.hasOwn(data, i)) continue
                const nestedKey = `${key}[${i}]`
                this.converterFormData(formData, nestedKey, data[i])
            }
            return
        }

        // Fallback para strings e outros tipos simples
        formData.append(key, data)
    },

    extrairHoraMinuto(horaInicio) {
        if (!horaInicio) return { hora: '00', minuto: '00' }

        if (typeof horaInicio === 'string') {
            const [hora, minuto] = horaInicio.split(':')
            return { hora, minuto }
        }

        if (horaInicio instanceof Date) {
            return {
                hora: horaInicio.getHours().toString().padStart(2, '0'),
                minuto: horaInicio.getMinutes().toString().padStart(2, '0'),
            }
        }

        return { hora: '00', minuto: '00' }
    },

    obterDataAtualFormatada() {
        const agora = new Date()
        const dia = agora.getDate().toString().padStart(2, '0')
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0')
        const ano = agora.getFullYear()
        const hora = agora.getHours().toString().padStart(2, '0')
        const minuto = agora.getMinutes().toString().padStart(2, '0')

        return `${dia}/${mes}/${ano} ${hora}:${minuto}`
    },

    formatarDataRegistro(dataAgenda, horaInicio) {
        try {
            const { hora, minuto } = funcoes.extrairHoraMinuto(horaInicio)

            if (typeof dataAgenda === 'string' && dataAgenda.includes('/')) {
                const [dia, mes, ano] = dataAgenda.split('/')
                return `${dia}/${mes}/${ano} ${hora}:${minuto}`
            }

            if (dataAgenda instanceof Date) {
                const dia = dataAgenda.getDate().toString().padStart(2, '0')
                const mes = (dataAgenda.getMonth() + 1).toString().padStart(2, '0')
                const ano = dataAgenda.getFullYear()
                return `${dia}/${mes}/${ano} ${hora}:${minuto}`
            }

            return funcoes.obterDataAtualFormatada()
        } catch (error) {
            console.error('Erro ao formatar data de registro:', error)
            return funcoes.obterDataAtualFormatada()
        }
    },
}

export const {
    formatarDataBanco,
    converterFormData,
    validarFormulario,
    formatatarTamanhoDoArquivo,
    textoComReticencias,
    faleConosco,
    gerarQRCODE,
    verificarDataLimite,
    formatarDataTZPtBrSemTimeZone,
    formatarDataTimeZonePtBr,
    formatarDataPorExtenso,
    formatDatePtBrExtenso,
    formatarMoedaPtBr,
    formatarDataPtBr,
    formatarDataQuebrada,
    formataDataTimePtBr,
    formatarDataBR,
    primeiraLetraMaiuscula,
    removerAcentos,
    slugUrl,
    validateCPF,
    validateSenha,
    formatarCPF,
    validarFormFields,
    formatarDataRegistro,
    extrairHoraMinuto,
    obterDataAtualFormatada,
} = funcoes

export default funcoes
