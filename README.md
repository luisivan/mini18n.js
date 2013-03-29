# Min i18n

I was tired of i18n libraries that are large and complex to use, so I decided to create a new one that is extremely easy to use and that doesn't have any requirement.

## Usage

Let's say that you want to translate a string ("Hi").

Your should include {{Hi}} (within two curly brackets) in your HTML.

Load you languages in a dict. For example:

i18n.dict['es'] = {
  'Hi': 'Hola'
}

Then, you just execute

i18n.translate();

If you want to dinamicly translate something, just execute:

i18n._("Hi") or simply _("Hi")

and it will return "Hola".