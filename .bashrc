# Run twolfson/sexy-bash-prompt
. ~/.bash_prompt
# Run twolfson/sexy-bash-prompt
. ~/.bash_prompt

usesamlauth () {
        local _args
        local _cmd
        _cmd="samlauth $*"
        CREDS="$( samlauth $* )"
        if [ $? -eq 0 ]
        then
                eval "${CREDS}"
        else
                echo "Error assuming auth with saml" >&2
        fi
}
