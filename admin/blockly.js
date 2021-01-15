'use strict';

// --- SendTo w-vk --------------------------------------------------
Blockly.Words['w-vk']               = {'en': 'W VK',                'pt': 'W VK',                       'pl': 'W VK',                           'nl': 'W VK',                       'it': 'W VK',                       'es': 'W VK',                       'fr': 'W VK',                           'de': 'W VK',                           'ru': 'W VK'};
Blockly.Words['w-vk_message']       = {'en': 'message',                     'pt': 'mensagem',                       'pl': 'wiadomość',                          'nl': 'bericht',                        'it': 'Messaggio',                      'es': 'mensaje',                        'fr': 'message',                            'de': 'Meldung',                            'ru': 'сообщение'};
Blockly.Words['w-vk_uids']         = {'en': 'Recipient (optional)',        'pt': 'Nome do usuário (opcional)',     'pl': 'Nazwa użytkownika (opcjonalnie)',    'nl': 'Gebruikersnaam (optioneel)',     'it': 'Nome utente (facoltativo)',      'es': 'Nombre de usuario (opcional)',   'fr': 'Nom d\'utilisateur (facultatif)',    'de': 'Empfänger (optional)',               'ru': 'ID пользователей (не обяз.)'};
Blockly.Words['w-vk_anyInstance']   = {'en': 'all instances',               'pt': 'todas as instâncias',            'pl': 'wszystkie przypadki',                'nl': 'alle instanties',                'it': 'tutte le istanze',               'es': 'todas las instancias',           'fr': 'toutes les instances',               'de': 'Alle Instanzen',                     'ru': 'На все драйвера'};
Blockly.Words['w-vk_tooltip']       = {"en": "Send message to WhatsApp via CallMeBot API", "de": "Senden Sie eine Nachricht über die CallMeBot-API an WhatsApp", "ru": "Отправить сообщение в WhatsApp через CallMeBot API", "pt": "Enviar mensagem para WhatsApp via API CallMeBot", "nl": "Stuur bericht naar WhatsApp via CallMeBot API", "fr": "Envoyer un message à WhatsApp via l'API CallMeBot", "it": "Invia un messaggio a WhatsApp tramite CallMeBot API", "es": "Enviar mensaje a WhatsApp a través de API CallMeBot", "pl": "Wyślij wiadomość do WhatsApp przez CallMeBot API", "zh-cn": "通过CallMeBot API将消息发送到WhatsApp"};
Blockly.Words['w-vk_log']           = {'en': 'log level',                   'pt': 'nível de log',                   'pl': 'poziom dziennika',                   'nl': 'Log niveau',                     'it': 'livello log',                    'es': 'nivel de registro',              'fr': 'niveau de journalisation',           'de': 'Loglevel',                           'ru': 'Протокол'};
Blockly.Words['w-vk_log_none']      = {'en': 'none',                        'pt': 'Nenhum',                         'pl': 'Żaden',                              'nl': 'geen',                           'it': 'nessuna',                        'es': 'ninguna',                        'fr': 'aucun',                              'de': 'keins',                              'ru': 'нет'};
Blockly.Words['w-vk_log_info']      = {'en': 'info',                        'pt': 'info',                           'pl': 'informacje',                         'nl': 'Info',                           'it': 'Informazioni',                   'es': 'información',                    'fr': 'Info',                               'de': 'info',                               'ru': 'инфо'};
Blockly.Words['w-vk_log_debug']     = {'en': 'debug',                       'pt': 'depurar',                        'pl': 'odpluskwić',                         'nl': 'Debug',                          'it': 'Debug',                          'es': 'depurar',                        'fr': 'déboguer',                           'de': 'debug',                              'ru': 'debug'};
Blockly.Words['w-vk_log_warn']      = {'en': 'warning',                     'pt': 'Atenção',                        'pl': 'ostrzeżenie',                        'nl': 'waarschuwing',                   'it': 'avvertimento',                   'es': 'advertencia',                    'fr': 'Attention',                          'de': 'warning',                            'ru': 'warning'};
Blockly.Words['w-vk_log_error']     = {'en': 'error',                       'pt': 'erro',                           'pl': 'błąd',                               'nl': 'fout',                           'it': 'errore',                         'es': 'error',                          'fr': 'Erreur',                             'de': 'error',                              'ru': 'ошибка'};
Blockly.Words['w-vk_help']          = {'en': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'pt': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'pl': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'nl': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'it': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'es': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'fr': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'de': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md', 'ru': 'https://github.com/ioBroker/ioBroker.w-vk/blob/master/README.md'};

Blockly.Sendto.blocks['w-vk'] =
    '<block type="w-vk">'
    + '     <value name="INSTANCE">'
    + '     </value>'
    + '     <value name="MESSAGE">'
    + '         <shadow type="text">'
    + '             <field name="TEXT">text</field>'
    + '         </shadow>'
    + '     </value>'
    + '     <value name="PHONE">'
    + '     </value>'
    + '     <value name="LOG">'
    + '     </value>'
    + '</block>';

Blockly.Blocks['w-vk'] = {
    init: function() {
        var options = [[Blockly.Words['w-vk_anyInstance'][systemLang], '']];
        if (typeof main !== 'undefined' && main.instances) {
            for (var i = 0; i < main.instances.length; i++) {
                var m = main.instances[i].match(/^system.adapter.w-vk.(\d+)$/);
                if (m) {
                    var k = parseInt(m[1], 10);
                    options.push(['w-vk.' + k, '.' + k]);
                }
            }
            if (options.length === 0) {
                for (var u = 0; u <= 4; u++) {
                    options.push(['w-vk.' + u, '.' + u]);
                }
            }
        } else {
            for (var n = 0; n <= 4; n++) {
                options.push(['w-vk.' + n, '.' + n]);
            }
        }

        this.appendDummyInput('INSTANCE')
            .appendField(Blockly.Words['w-vk'][systemLang])
            .appendField(new Blockly.FieldDropdown(options), 'INSTANCE');

        this.appendValueInput('MESSAGE')
            .appendField(Blockly.Words['w-vk_message'][systemLang]);

        var input = this.appendValueInput('UIDS')
            .setCheck('String')
            .appendField(Blockly.Words['w-vk_uids'][systemLang]);

        this.appendDummyInput('LOG')
            .appendField(Blockly.Words['w-vk_log'][systemLang])
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Words['w-vk_log_none'][systemLang],  ''],
                [Blockly.Words['w-vk_log_info'][systemLang],  'log'],
                [Blockly.Words['w-vk_log_debug'][systemLang], 'debug'],
                [Blockly.Words['w-vk_log_warn'][systemLang],  'warn'],
                [Blockly.Words['w-vk_log_error'][systemLang], 'error']
            ]), 'LOG');

        if (input.connection) input.connection._optional = true;

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

        this.setColour(Blockly.Sendto.HUE);
        this.setTooltip(Blockly.Words['w-vk_tooltip'][systemLang]);
        this.setHelpUrl(Blockly.Words['w-vk_help'][systemLang]);
    }
};

Blockly.JavaScript['w-vk'] = function(block) {
    var dropdown_instance = block.getFieldValue('INSTANCE');
    var logLevel = block.getFieldValue('LOG');
    var value_message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_uids = Blockly.JavaScript.valueToCode(block, 'UIDS', Blockly.JavaScript.ORDER_ATOMIC);

    var logText;
    if (logLevel) {
        logText = 'console.' + logLevel + '("w-vk' + (value_uids ? '[' + value_uids + ']' : '') + ': " + ' + value_message + ');\n'
    } else {
        logText = '';
    }

    return 'sendTo("w-vk' + dropdown_instance + '", "send", {\n    text: ' +
        value_message + (value_uids ? ',\n    ' + 'phone: ' + value_uids : '') +
        '\n});\n' +
        logText;
};