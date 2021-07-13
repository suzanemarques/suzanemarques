$(function(){
        
        $('.sp_celphones').mask('(00) 00000-0000');
        
        $('.cep').mask('00000-000');

        $('.email').mask('')

    
        function showName() {
            var myLocalVariable= 'My local variable.';

            console.log(myGlobalVariable);

            console.log(myLocalVariable);
        

} 
        function mascaraDeEmail(email)  {
            const textoAtual=email.value;
        } 
    
        function mascaraDeTelefone(telefone) {
            const textoAtual=telefone.value;
        }

        function removeClass(element){
            element.classList.remove("btn-danger");
        }

        function mudarClasseBotao(element){
            element.classList.add("btn-danger");
        }

        function createDOMElement(str) {
            let temp = document.createElement("template");
            temp.innerHTML = str.trim();
            return temp;
        }
        
        
        document.salvar = salvar;
        
        function salvar(){
            try{

                var linhaNova = createDOMElement(`
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                `);

                setDadosCellValue("nome", linhaNova);
                setDadosCellValue("idade", linhaNova);
                setDadosCellValue("telefone", linhaNova);
                setDadosCellValue("endereco", linhaNova);
                setDadosCellValue("bairro", linhaNova);
                setDadosCellValue("cidade", linhaNova);
                setDadosCellValue("cep", linhaNova);
                setDadosCellValue("email", linhaNova);

                let content = document.getElementById("dados").innerHTML;

                document.getElementById("dados").innerHTML = content + linhaNova.innerHTML;

                

                limparCampos();

            }
            catch(error){
                alert(error);
            }
        }

        function limparCampos(){
            //document.getElementById('nome').value = ''; JavaScript puro ou Vanilla
            $("#nome").val(''); // Jquery

            document.getElementById('idade').value = '';
            document.getElementById('telefone').value = '';
            document.getElementById('endereco').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('cidade').value = '';
            document.getElementById('cep').value = '';
            document.getElementById('email').value = '';
        }
        
        const validacoes = {
            nome: validaNome, 
            idade: validaIdade,
            telefone: validaTelefone,
            endereco: validaEndereco,
            bairro: validaBairro,
            cidade: validaCidade,
            cep: validaCep,
            email: validaEmail,
            

            

        };
        // () => console.log('teste'); // função lambda.
        function validaNome(value){
            if(value == '')
                return "O campo nome é obrigatório.";

            if(value.length < 5 || value.length > 60)
                return "O campo nome precisa ter de 5 a 60 caractéres.";
        }
        function validaIdade(value){
            if(value == '')
            return "O campo idade é obrigatório.";            

            if(parseInt(value) < 1 || parseInt(value) > 120)
            return "A idade precisar estar entre 1 e 120.";
        }
        function validaTelefone(value){
            if(value == '')
                return "O campo telefone é obrigatório.";

            if(!value.match(/^[0-9]{2}[ ][0-9]{5}[-][0-9]{4}$/));
                return "Insira um telefone válido.";
        }
        function validaEndereco(value){
            if(value == '')
            return "O campo endereco é obrigatório.";

            if(value.length > 120)
                return "O campo endereco precisa ter no máximo 120 caractéres.";
        }
        function validaBairro(value){
            if(value == '')
                return "O campo bairro é obrigatório.";

            if(value.length > 40)
                return "O campo bairro precisa ter máximo 40 caractéres.";
        }
        function validaCidade(value){
            if(value == '')
                return "O campo cidade é obrigatório.";

            if(value.length > 40)
                return "O campo cidade precisa ter máximo 40 caractéres.";

        }
        function validaCep(value){
           if(value == '')
                return "O campo cep é obrigatótio.";

                 
            if(value.length > 9)
                return "O campo cep precisa ter máximo 9 caracteres.";

                  if(!value.match(/^[0-8]{5}[-][0-8]{3}$/))
                return "O campo cep precisa ter máximo 9 caracteres.";

        }
        function validaEmail(value){
            if(value == '')
                return "O campo email é obrigatótio.";

                var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
				 if(filtro.test(email)){
				$('#email').removeClass("campo-erro");
			 } else {
				   $('#email').addClass("campo-erro");
				  
			 }
		  }
    	 return false;
        
      		function setDadosCellValue(name, linhaNova) {

            var error = validacoes[name] && validacoes[name](getFieldValue(name));
            
            if(error){
                throw Error(error);
            }

            var campos = ["nome", "idade", "telefone", "endereco", "bairro", "cidade","cep","email",];

            var cellIndex = campos.indexOf(name);

            setCellValue(linhaNova, cellIndex, getFieldValue(name));
        }

        function getFieldValue(name){
            return document.getElementById(name).value;
        }

        function setCellValue(linhaNova, cellIndex, value){
            linhaNova.content.firstChild.getElementsByTagName('td')[cellIndex].innerText = value;
        }   


        function tiraHifen(telefone) {
            const textoAtual=telefone.value;
            const textoAjustado=textoAtual.replace(/\-/g,);

            telefone.value=textoAjustado;
        }

        function tiraHifen(cep) {
            const textoAtual=cep.value;
            const textoAjustado=textoAtual.replace(/\-/g,);

            cep.value=textoAjustado;
        }
         

        
        
        
        /*
            validação
            a aparencia dos campos
                cep: com mascara e validação 00000-000
                emal: só validação
                nome: min: 5, max 60, required
                idade: min 0, max 120, required
                telefone: formato 00 00000-0000
                endereço: max characteres 120, required
                bairro: max characteres 40, required
                cidade: max characteres 40, required
        */
});