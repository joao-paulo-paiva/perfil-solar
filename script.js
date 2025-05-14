function getSigno(dia, mes) {
    const signos = [
        {nome: 'Áries',       periodo: [3, 21, 4, 19]},      // 21 mar - 19 abr
        {nome: 'Touro',       periodo: [4, 20, 5, 20]},      // 20 abr - 20 mai
        {nome: 'Gêmeos',      periodo: [5, 21, 6, 20]},      // 21 mai - 20 jun
        {nome: 'Câncer',      periodo: [6, 21, 7, 22]},      // 21 jun - 22 jul
        {nome: 'Leão',        periodo: [7, 23, 8, 22]},      // 23 jul - 22 ago
        {nome: 'Virgem',      periodo: [8, 23, 9, 22]},      // 23 ago - 22 set
        {nome: 'Libra',       periodo: [9, 23, 10, 22]},     // 23 set - 22 out
        {nome: 'Escorpião',   periodo: [10, 23, 11, 21]},    // 23 out - 21 nov
        {nome: 'Sagitário',   periodo: [11, 22, 12, 21]},    // 22 nov - 21 dez
        {nome: 'Capricórnio', periodo: [12, 22, 1, 19]},     // 22 dez - 19 jan
        {nome: 'Aquário',     periodo: [1, 20, 2, 18]},      // 20 jan - 18 fev
        {nome: 'Peixes',      periodo: [2, 19, 3, 20]}       // 19 fev - 20 mar
    ];

    for(const signo of signos) {
        const [startMonth, startDay, endMonth, endDay] = signo.periodo;
        if((mes === startMonth && dia >= startDay) || 
           (mes === endMonth && dia <= endDay)) {
            return signo.nome;
        }
    }
    return '';
}

function getDescricaoSigno(signo) {
    const descricoes = {
        'Áries': 'Corajoso e enérgico, você enfrenta desafios com entusiasmo! ♈',
        'Touro': 'Prático e determinado, valoriza segurança e conforto. ♉',
        'Gêmeos': 'Curioso e comunicativo, adora novas experiências! ♊',
        'Câncer': 'Sensível e intuitivo, protege quem ama. ♋',
        'Leão': 'Carismático e criativo, brilha naturalmente! ♌',
        'Virgem': 'Analítico e organizado, busca perfeição. ♍',
        'Libra': 'Diplomata e harmonioso, busca justiça. ♎',
        'Escorpião': 'Intenso e apaixonado, transforma tudo ao redor. ♏',
        'Sagitário': 'Aventureiro e otimista, ama liberdade. ♐',
        'Capricórnio': 'Ambicioso e disciplinado, constrói seu sucesso. ♑',
        'Aquário': 'Inovador e original, pensa no futuro. ♒',
        'Peixes': 'Empático e artístico, conectado ao universo. ♓'
    };
    return descricoes[signo] || 'Signo não encontrado';
}

function calcularPerfil() {
    const dataInput = document.getElementById('dataNascimento').value;
    if(!dataInput) return alert('Por favor, selecione uma data');
    
    const [ano, mes, dia] = dataInput.split('-').map(Number);
    const data = new Date(ano, mes - 1, dia);
    
    // Validação de data
    if(data.getMonth() + 1 !== mes || data.getDate() !== dia) {
        return alert('Data inválida!');
    }

    // Cálculos
    const signo = getSigno(dia, mes);
    const diaSemana = data.toLocaleDateString('pt-BR', {weekday: 'long'});
    const bissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);

    // Exibição
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('signo').textContent = signo;
    document.getElementById('descricao').textContent = getDescricaoSigno(signo);
    document.getElementById('diaSemana').textContent = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    document.getElementById('bissexto').textContent = bissexto ? 'Sim ✅' : 'Não ❌';
}
